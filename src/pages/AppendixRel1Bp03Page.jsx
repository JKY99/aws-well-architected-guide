import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP03 — 고정 제약 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        AWS 서비스에는 요청을 통해 변경할 수 없는 고정 제약(하드 제한)이 존재합니다.
        이러한 제약은 서비스 할당량과 달리 증가 요청이 불가능하므로,
        아키텍처 설계 단계에서부터 반드시 고려해야 합니다.
        고정 제약을 무시한 설계는 향후 변경 비용이 매우 크거나 변경 자체가 불가능할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드에서 사용하는 모든 AWS 서비스의 고정 제약을 사전에 파악하고,
        이를 설계 원칙에 반영하여 제약에 부딪히지 않는 확장 가능한 아키텍처를 구현합니다.
        고정 제약 목록은 아키텍처 문서에 명시하고 정기적으로 검토합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>VPC CIDR 블록 크기를 초기에 너무 작게 설정하여 향후 확장이 불가능한 경우</li>
        <li>Amazon S3 버킷 이름의 전역 유일성 요건을 고려하지 않고 명명 규칙을 설계하는 경우</li>
        <li>DynamoDB 테이블의 파티션 키 설계 제약을 무시하여 핫 파티션이 발생하는 경우</li>
        <li>Lambda 함수의 최대 실행 시간(15분) 제약을 모르고 장시간 작업에 적용하는 경우</li>
        <li>변경 불가능한 설정(예: 리전, AZ 선택)을 나중에 수정하려고 시도하는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>아키텍처 재설계 없이 장기적으로 확장 가능한 시스템 구축</li>
        <li>고정 제약으로 인한 예상치 못한 마이그레이션 작업 방지</li>
        <li>설계 단계에서 제약을 반영하여 구현 비용 절감</li>
        <li>운영팀의 제약 관련 오류 대응 부담 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>각 AWS 서비스의 공식 문서에서 하드 제한(변경 불가 제약) 목록을 확인합니다.</li>
        <li>VPC 설계 시 향후 성장을 고려하여 충분히 큰 CIDR 블록(/16 이상)을 할당합니다.</li>
        <li>데이터베이스 스키마, 파티션 키, 인덱스 설계를 초기에 신중하게 검토합니다.</li>
        <li>아키텍처 리뷰 체크리스트에 고정 제약 항목을 포함합니다.</li>
        <li>새로운 서비스 도입 시 해당 서비스의 고정 제약 문서화를 의무화합니다.</li>
        <li>AWS Well-Architected Framework 리뷰를 통해 고정 제약 관련 위험을 사전 평가합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas — 조정 가능한 할당량과 고정 제약 구분 확인</li>
        <li>AWS 서비스별 제한 문서 — 각 서비스의 고정 제약 상세 내용</li>
        <li>AWS Well-Architected Tool — 아키텍처 위험 평가 및 고정 제약 검토</li>
        <li>Amazon VPC 설계 가이드 — CIDR 블록 계획 모범 사례</li>
        <li>AWS Architecture Center — 확장 가능한 아키텍처 패턴 참고자료</li>
      </ul>
      <PageNav />
    </article>
  );
}
