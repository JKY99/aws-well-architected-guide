import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC03-BP02 — 최소 권한 액세스 부여</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 과도한 권한으로 인한 자격 증명 침해 시 피해 범위가 커집니다.</p>
      </div>
      <p>
        사용자가 특정 직무를 수행하는 데 필요한 최소한의 권한만 부여합니다. 개발자와 프로덕션 환경 분리, 제한되고 통제된 프로덕션 접근, 작업 완료 후 즉각적인 접근 취소를 포함합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>사용자는 특정 직무에 필요한 최소한의 권한만 보유</li>
        <li>별도의 AWS 계정으로 개발자와 프로덕션 환경 분리</li>
        <li>유효한 사용 사례에 대해서만 제한되고 통제된 프로덕션 접근 허용</li>
        <li>작업 완료 후 프로덕션 접근 즉시 취소</li>
        <li>필요 없어진 권한의 정기적 검토 및 신속한 취소</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본적으로 사용자에게 관리자 권한 부여</li>
        <li>일상적인 활동에 루트 사용자 계정 사용</li>
        <li>적절한 범위 지정 없이 과도하게 허용적인 정책 생성</li>
        <li>권한 검토 주기가 너무 길어 권한 비대화 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자격 증명 침해 시 피해 범위 최소화</li>
        <li>내부자 위협 및 실수로 인한 데이터 손상 가능성 감소</li>
        <li>규정 준수 감사 요건 충족</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM 그룹 및 역할에 할당된 최소 권한 정책을 구현합니다.</li>
        <li>별도의 AWS 계정을 통해 개발/프로덕션 환경을 격리합니다.</li>
        <li>CloudTrail 로그와 IAM Access Analyzer를 기반으로 정책을 수립합니다.</li>
        <li>불필요한 권한을 감지하고 미사용 IAM 엔티티를 제거합니다.</li>
        <li>권한 경계를 사용하여 최대 권한을 설정합니다.</li>
        <li>ABAC(속성 기반 접근 제어)와 리소스 태그를 활용합니다.</li>
        <li>SCP(서비스 제어 정책)를 활용하여 AWS Organizations 전체에 가드레일을 적용합니다.</li>
        <li>역할 매트릭스를 작성하여 역할과 접근 수준을 정의합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — ID 및 접근 관리</li>
        <li>IAM Access Analyzer — 정책 생성 및 미사용 접근 탐지</li>
        <li>AWS CloudTrail — API 사용 현황 검토</li>
        <li>AWS Organizations — 서비스 제어 정책</li>
        <li>AWS Control Tower — 관리형 가드레일</li>
        <li>AWS Config — 권한 감사</li>
      </ul>
      <PageNav />
    </article>
  );
}
