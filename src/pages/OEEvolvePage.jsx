import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function OEEvolvePage() {
  return (
    <article className="doc-content">
      <h1>운영 우수성 — 발전</h1>

      <p>
        운영 우수성을 지속하기 위해 학습하고, 공유하고, 지속적으로 개선합니다.
      </p>

      <p>
        거의 지속적인 점진적 개선을 위해 업무 사이클을 할당합니다.
        고객에게 영향을 미친 모든 이벤트에 대해 사후 분석(Post-Incident Analysis)을 수행합니다.
        재발을 방지하기 위한 원인 요소와 예방 조치를 파악하고,
        영향을 받은 커뮤니티와 원인 요소를 적절히 공유합니다.
      </p>

      <p>
        기능 요청, 이슈 해결, 컴플라이언스 요건 등 개선 기회를 정기적으로 평가하고 우선순위를 정합니다.
        대상은 워크로드 자체와 운영 절차 모두를 포함합니다.
        절차 안에 피드백 루프(Feedback Loop)를 포함시켜 개선 영역을 신속히 파악하고
        운영 실행에서 배운 교훈을 포착합니다.
      </p>

      <p>
        팀 전체에 교훈(Lessons Learned)을 공유하여 혜택을 나눕니다.
        교훈 내 트렌드를 분석하고, 운영 지표에 대한 팀 간 회고(Retrospective) 분석을 통해
        개선 기회와 방법을 발굴합니다.
        개선을 위한 변경을 구현하고 결과를 평가하여 성공 여부를 판단합니다.
      </p>

      <h2>OPS 11. 운영 발전 방법</h2>
      <p>
        운영의 효과성과 효율성을 향상시키기 위해 거의 지속적인 점진적 개선에 시간과 리소스를 할당합니다.
        운영의 성공적인 진화는 다음을 기반으로 합니다:
      </p>
      <ul>
        <li>잦은 소규모 개선</li>
        <li>실험·개발·테스트를 위한 안전한 환경과 시간 제공</li>
        <li>실패로부터 배우는 문화 장려</li>
        <li>점진적으로 운영 통제 수준이 높아지는 샌드박스·개발·테스트·프로덕션 환경 지원</li>
      </ul>

      <div className="doc-note">
        <div className="doc-note-title">AWS 분석 도구 활용</div>
        <p>
          로그 데이터를 Amazon S3로 내보내거나 직접 저장하고, AWS Glue로 분석을 위한 데이터를 준비하며,
          Amazon Athena로 표준 SQL로 쿼리하고, Amazon QuickSight 같은 BI 도구로 데이터를 시각화하여
          개선을 이끄는 트렌드와 관심 이벤트를 발견할 수 있습니다.
        </p>
      </div>

      <PageNav />
    </article>
  );
}
