import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC07-BP01 — 데이터 분류 체계 식별 및 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        조직의 데이터를 민감도와 중요도에 따라 분류하는 체계를 수립하고 구현합니다. 분류된 데이터에
        따라 적절한 보호 제어를 자동으로 적용할 수 있도록 태그, 레이블, 메타데이터를 활용하여
        데이터 분류를 자동화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        조직의 모든 데이터는 명확한 분류 기준(예: 공개, 내부, 기밀, 극비)에 따라 분류되고 태그가
        지정됩니다. 분류 결과는 접근 제어, 암호화, 보존 정책에 자동으로 반영되며, 새로운 데이터
        저장소도 생성 시 자동으로 분류됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터 분류 정책이 문서로만 존재하고 실제 시스템에 적용되지 않음</li>
        <li>모든 데이터를 동일한 보호 수준으로 처리하여 과보호 또는 미보호 발생</li>
        <li>데이터 분류를 수동으로 수행하여 일관성이 없거나 누락되는 경우 발생</li>
        <li>개인정보(PII), 결제 정보(PCI) 등 규제 대상 데이터가 어디에 있는지 파악하지 못함</li>
        <li>S3 버킷과 데이터베이스에 분류 태그 없이 다양한 민감도의 데이터가 혼재함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>민감 데이터의 위치를 파악하고 적절한 보호 제어를 적용할 수 있음</li>
        <li>GDPR, HIPAA 등 개인정보 규제 준수를 위한 데이터 거버넌스 기반 마련</li>
        <li>보안 투자를 가장 민감한 데이터에 집중하여 효율적인 보안 운영 가능</li>
        <li>데이터 침해 발생 시 영향받은 데이터의 범위와 민감도를 신속하게 파악</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>조직의 데이터 분류 정책을 수립하여 공개(Public), 내부(Internal), 기밀(Confidential), 극비(Restricted) 등 수준을 정의하고 각 수준별 처리 요구 사항을 문서화합니다.</li>
        <li>Amazon Macie를 활성화하여 S3 버킷의 개인정보(PII), 금융 정보, 의료 정보 등 민감 데이터를 자동으로 검색하고 분류합니다.</li>
        <li>AWS 태그를 사용하여 데이터 분류 수준을 S3 버킷, RDS 인스턴스 등 데이터 저장소에 표시하고, AWS Organizations SCP로 분류 태그 없는 리소스 생성을 제한합니다.</li>
        <li>AWS Config 규칙을 사용하여 분류 태그가 없는 데이터 저장소를 자동으로 감지하고 알림을 발송합니다.</li>
        <li>데이터 분류 결과를 AWS Security Hub로 통합하여 민감 데이터 노출 위험을 중앙에서 관리합니다.</li>
        <li>새로운 데이터 저장소 생성 시 데이터 분류 태그를 필수로 적용하도록 IaC 템플릿에 포함시킵니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Macie — S3의 민감 데이터 자동 검색 및 분류</li>
        <li>AWS 태그 — 데이터 분류 수준 메타데이터 관리</li>
        <li>AWS Config — 분류 태그 규정 준수 자동 평가</li>
        <li>AWS Organizations SCP — 분류 정책 조직 전체 강제 적용</li>
        <li>AWS Security Hub — 민감 데이터 발견 결과 중앙 집계</li>
      </ul>
      <PageNav />
    </article>
  );
}
