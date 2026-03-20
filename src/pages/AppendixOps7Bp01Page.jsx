import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>OPS07-BP01 — 인력 역량 확보</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        워크로드를 지원하기 위해 충분히 훈련된 인원이 워크로드 가용 시간 동안 지원할 수 있도록 합니다.
        워크로드를 구성하는 소프트웨어와 서비스에 대한 교육을 제공합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드가 가용한 시간 동안 지원하기 위한 충분히 훈련된 인원이 있습니다.
        워크로드를 구성하는 소프트웨어와 서비스에 대한 교육이 팀원들에게 제공됩니다.
        온콜 로테이션, 보안 문제, 수명 주기 이벤트(지원 종료, 인증서 교체) 등을 처리할 인원이 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사용 중인 플랫폼 및 서비스 운영에 대한 훈련 없이 워크로드를 배포하는 경우</li>
        <li>온콜 로테이션을 지원하거나 팀원들이 휴가를 낼 만큼 충분한 인원이 없는 경우</li>
        <li>팀 규모와 기술이 운영 요구사항 변화에 맞게 조정되지 않는 경우</li>
        <li>전문 지식이 소수의 개인에게만 집중되어 단일 장애 지점이 생기는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>숙련된 팀원이 있어 워크로드를 효과적으로 지원</li>
        <li>충분한 팀원으로 워크로드와 온콜 로테이션을 지원하면서 번아웃 위험 감소</li>
        <li>인시던트 대응 능력 향상 및 복구 시간 단축</li>
        <li>지식 분산으로 단일 장애 지점 제거</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>온콜 의무, 보안 문제, 수명 주기 이벤트를 포함하여 워크로드를 운영하고 지원하기 위한 적절한 인원을 배치합니다.</li>
        <li>AWS Training and Certification을 활용하여 소프트웨어 및 플랫폼에 대한 교육을 제공합니다.</li>
        <li>팀 규모와 기술을 정기적으로 평가하고 운영 요구사항에 맞게 조정합니다.</li>
        <li>AWS Health를 통해 계획된 수명 주기 이벤트와 보안 알림을 처리할 용량을 확인합니다.</li>
        <li>지식 공유 프로그램을 통해 전문 지식을 팀 전체에 분산시킵니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Training and Certification — 팀원 교육 및 자격증 취득</li>
        <li>AWS Health — 수명 주기 이벤트 및 보안 알림 관리</li>
        <li>AWS Systems Manager — 운영 자동화로 인력 부하 감소</li>
      </ul>

      <PageNav />
    </article>
  );
}
